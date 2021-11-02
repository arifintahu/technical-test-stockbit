const db = require("./prepare");

db.each(
  `
    SELECT 
      USER_CHILD.ID AS ID,
      USER_CHILD.UserName AS UserName,
      USER_PARENT.UserName AS ParentUserName
    FROM USER AS USER_CHILD
    LEFT JOIN USER AS USER_PARENT
    ON USER_CHILD.Parent=USER_PARENT.ID
    ORDER BY USER_CHILD.ID ASC
`,
  function (err, row) {
    if (err != null) {
      console.log(err);
      return;
    }
    console.log(row);
  }
);

db.close();
