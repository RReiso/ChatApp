const express = require("express");
const morgan = require("morgan");
const server = express();
const PORT = process.env.PORT || 3003;
server.use(morgan("dev"));
server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
