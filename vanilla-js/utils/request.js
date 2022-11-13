const API_END_POINT = "/web/";

/**
 * @param
 * options: {
 *  method: '',
 *  headers: {},
 *  body: JSON.stringify()
 * }
 */
export const request = async (url) => {
  console.log('hi, res');
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error("API Call Failed");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
