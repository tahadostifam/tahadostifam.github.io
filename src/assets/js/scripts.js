const json_server_url = "/server/server.json"

window.fetch_data = () => {
    return new Promise(async (ok, err) => {
      await axios.get(json_server_url).then((response) => {
        ok(response.data)
      }).catch(() => {
        err()
      })
    })
}

window.route_params = (name) => {
    return new URLSearchParams(window.location.search).get(name);
}

window.loadLazyImage = (e) => {
    e.classList.add('loaded')
}