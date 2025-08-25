const TURSO_URL = 'https://appimacsa-xoce2509.aws-us-east-1.turso.io/v2/pipeline';
const AUTH_TOKEN = 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NTYxNDIxNzQsImlkIjoiMjQ5ZjBjZGItYzk2NS00MDE2LWI1YTMtYjI1ZjI0NTAyODJhIiwicmlkIjoiZmIwZWNlNDAtMWJjYS00MzcyLTliMjUtMzFhZjY4MmQzNzY1In0.SUaAu1B5YV_do1zwgIuuyHlUVjeRae8WFzzZK9DzIsLrGjmWpF7lyCt-vgUPOvlkK4jJhmp-QsFNhI-Mf0VrAA';

export async function ejecutarSQL(sql, args = []) {
  const payload = {
    requests: [
      {
        type: "execute",
        stmt: {
          sql,
          args: args.map(val => ({
            type: typeof val === "number" ? "integer" : "text",
            value: String(val)
          }))
        }
      },
      { type: "close" }
    ]
  };

  const res = await fetch(TURSO_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  return data;
}

