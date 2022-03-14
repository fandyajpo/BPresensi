import fetch from "lib/fetch";
import withSession from "lib/session";

const query = async (url, token, field) => {
  const query = await fetch(process.env.SERVICE_URL + url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Basic " + token,
    },
    body: JSON.stringify(field),
  });
  return query;
};

const upload = async (field) => {
  const query = await fetch(process.env.SERVICE_NODE_URL + "image-upload", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: field }),
  });
  return query;
};

export default withSession(async (req, res) => {
  const user = await req.session.get("user");
  let users;
  let response;
  let result;

  if (!user) {
    return res.status(401).end();
  }

  try {
    if (req.body.url === "upload") {
      response = await upload(req.body.baseImage);
    } else {
      response = await query(req.body.url, user.access_token, req.body);
    }

    result = await response.json();

    if (result === "unauthorized") {
      response = await query("refresh", user.access_token, {
        refresh_token: user.refresh_token,
      });
      result = await response.json();

      if (result === "unauthorized") {
        await req.session.destroy();
      }

      if (response.ok) {
        users = {
          isLoggedIn: true,
          access_token: result.access_token,
          refresh_token: result.refresh_token,
        };
        await req.session.set("user", users);
        await req.session.save();

        response = await query(req.body.url, result.access_token, req.body);
        result = await response.json();
      }
    }

    switch (req.body.method) {
      case "logout":
        await req.session.destroy();
        break;
      // default:
    }

    if (!response.ok) {
      const error = new Error(response.status);
      error.info = result;
      error.status = response.status;
      throw error;
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).end(error.info);
  }
});
