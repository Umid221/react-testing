function Application() {
  return (
    <>
      <h1>Job app form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/149" alt="something" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            id="name"
            placeholder="fullname"
            value={"Umid"}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location"> Job Location</label>
          <select id="job-location">
            <option value={""}>Select a country</option>
            <option value={"US"}>US</option>
            <option value={"UK"}>UK</option>
            <option value={"CA"}>Canada</option>
            <option value={"IN"}>India</option>
            <option value={"AU"}>Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type={"checkbox"} id="terms" />I agree with the terms
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
}

export default Application;
