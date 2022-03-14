import fetch from "lib/fetch";
import withSession from "lib/session";

const query = async () => {
  const query = await fetch(process.env.SERVICE_URL + "login", {
    method: "GET",
  });
  return query;
};

export default withSession(async (req, res) => {
  const user = await req.session.get("user");

  try {
    const response = await query();
    const result = await response.json();

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
