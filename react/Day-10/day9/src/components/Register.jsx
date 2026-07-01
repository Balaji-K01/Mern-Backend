const Register = () => {
  return (
    <>
      <div className="h-100 p-5 bg-amber-100 flex justify-center">
        <form>
          <div className="bg-white p-2 w-100 rounded">
            <div className="bg-black text-white mb-4 p-2">
              <h1>Register</h1>
              <p>Register Yourself if your New!</p>
            </div>
            <table>
              <tr>
                <td>
                  <label htmlFor="" className="mx-4">
                    Enter the name
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border w-60 p-1"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label htmlFor="" className="mx-4">
                    Enter the Age
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border w-60 p-1"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label htmlFor="" className="mx-4">
                    Enter the City
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border w-60 p-1"
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value={"Regsiter"}
                    className="bg-black text-white w-25 rounded  p-2 text-center  "
                  />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
