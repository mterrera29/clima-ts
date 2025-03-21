fetch(`http://api.openweathermap.org/`)
  .then(async (res) => {
    if (!res.ok) {
      throw new Error('salio un error');
    }
    return res.json;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
