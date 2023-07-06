

export async function createExpense() {

  const res = await fetch("/api/expense/create",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        amount: 100,
        description: "test",
        date: "2021-09-01",
      },
    }),

  });
  const data = await res.json();
  
  if (data.error || !data.createdExpense) {
    if (data.error instanceof Array) {
      throw new Error(data.error.join(", "));
    }
    throw new Error(data.error ?? "Something went wrong");
  }

  return data;
}
