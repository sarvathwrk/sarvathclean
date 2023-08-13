import http from "./httpmiddleware";
import { ACCESS_POINT } from "../config";

const getFreedom = async (
  select,
  tableName,
  condition,
  groupby = "id",
  orderby = "id"
) => {
  let value = {};
  value.select = select;
  value.tableName = tableName;
  value.condition = condition;
  value.groupby = groupby;
  value.orderby = orderby;
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/getFullFreedom/getFreedom`,
    value
  );
  return result;
};
const addMaster = async (tableName, categoryArray) => {
  const result = await http.post(
    ACCESS_POINT + `/cmsContent/master/${tableName}`,
    categoryArray
  );
  return result;
};

const deleteMaster = async (categoryArray) => {
  const result = await http.post(
    ACCESS_POINT + `/cmsContent/delete/deleteFreedom/:id}`,
    categoryArray
  );
  return result;
};
const deletemaster = async (table, id) => {
  const result = await http.delete(
    ACCESS_POINT + `/cmsContent/master/${table}/${id}`

  );
  return result;
};

const updateMaster = async (tableName, id, categoryArray, column = "id") => {
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/master/${tableName}/${column}`,
    { id: id, categoryArray }
  );
  return result;
};
const Getip = async () => {
  const { data: result } = await http.get('https://geolocation-db.com/json/')
  return result
}
const MultiFileUpload = async (tableName, data, id = "id") => {
  const result = await http.post(
    ACCESS_POINT + `/cmsContent/web/MultiFileUpload/${tableName}/${id}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  return result;
};
const SingleFileUpload = async (tableName, formData) => {
  const result = await http.put(
    ACCESS_POINT + `/cmsContent/SingleFileUpload/${tableName}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  return result;
};

export default
  {
    getFreedom,
    addMaster,
    deleteMaster,
    updateMaster,
    Getip,
    deletemaster,
    MultiFileUpload,
    SingleFileUpload,
  }