module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/josn",
    },
    body: JSON.stringify({ message: "Hello From Serverless" }),
  };
};
