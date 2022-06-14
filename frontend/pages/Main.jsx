function Main() {
  return (
    <main>
      <section>
        <h1>Holidays! Celebrate!</h1>
        <form>
          <fieldset>
            <legend>Add</legend>
            <label htmlFor="holiday">Name</label>
            <input id="holiday" name="holiday" />
            <button>Add a reason to celebrate</button>
          </fieldset>
        </form>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>World Kindness Day</td>
              <td>9999</td>
              <td>Like</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
            <tr>
              <td>Bathtub Party Day</td>
              <td>12583</td>
              <td>Like</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Main;