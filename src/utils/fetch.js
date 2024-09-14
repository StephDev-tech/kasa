const houseSheetData = async (url) => {
    const baseUrl = window.location.origin;
    const data = await fetch(baseUrl + url);
    return await data.json();
  };

  const houseSheetDataById = async (url, id) => {
    const allResult = await houseSheetData(url);
    const appart = allResult.find(appartItem => appartItem.id === id)
    return appart;
  };


export {houseSheetData, houseSheetDataById}
