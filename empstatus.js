const employees = [
    { employee: "user1", status: "active" },
    { employee: "user2", status: "inactive" },
  ];
  
  const groupByStatus = (arr) => {
    return arr.reduce((acc, current) => {
      const { status } = current;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(current);
      return acc;
    }, {});
  };
  
  const groupedEmployees = groupByStatus(employees);
  console.log(JSON.stringify(groupedEmployees, null, 2));
  