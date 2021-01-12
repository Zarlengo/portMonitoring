const API = {
  async getPorts() {
    let res;
    try {
      res = await fetch("/api/getPorts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json;
  },
  async pingPorts(serverObject) {
    return await fetch("/api/pingPort", {
      method: "POST",
      body: JSON.stringify(serverObject),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      if (response.status === 200) {
        return true;
      }
      return false;
    });
  },
};
