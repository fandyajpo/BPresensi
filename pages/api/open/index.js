import fetch from "lib/fetch";
import withSession from "lib/session";

const query = async (url, field) => {
  const query = await fetch(process.env.SERVICE_URL + url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      // 'Authorization': 'Basic '+token,
    },
    body: JSON.stringify(field),
  });
  return query;
};

export default withSession(async (req, res) => {
  const user = await req.session.get("user");

  try {
    const response = await query(req.body.url, req.body);
    const result = await response.json();

    if (!response.ok) {
      const error = new Error(response.status);
      error.info = result;
      error.status = response.status;
      throw error;
    }

    const ret = {
      isLoggedIn: true,
      access_token: result.access_token,
      refresh_token: result.refresh_token,
    };
    await req.session.set("user", ret);
    await req.session.save();
    delete ret["access_token"];
    delete ret["refresh_token"];

    res.status(200).json(ret);
  } catch (error) {
    res.status(400).end(error.info);
  }
});
