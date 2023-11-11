

export async function googleReq(schema:string , rows:string)
{
    const bodyres = {
        "prompt":{
          "text":`Give me ${rows} records for this SQL Table \n ${schema} in a SQL INSERT QUERY`
        },
        
      }
      const key : string = import.meta.env.VITE_APP_API_KEY
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key="+key,{
        method:"POST",
        headers:
        {
          "Content-Type":"application/json",
        },
        body:JSON.stringify(bodyres)
      })
      if(res.ok != true)
      {
        return "Error to translate"
      }
      const result = await res.json()
      const query : string = result.candidates[0].output.replaceAll("```sql","")
      return query.replace("```","").trim()
}

