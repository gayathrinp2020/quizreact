// serverless function code (api/test.js)
const handler = async (req, res) => {
  try {
    // Perform some logic or data processing here
    const data = {
      message: "This is a test response from the serverless function!",
      timestamp: new Date().toISOString(),
    };

    // Return a JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    // Return an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = handler;
