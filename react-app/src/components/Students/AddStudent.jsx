import {useState} from 'react';

function AddStudent()
{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  
  const onHandleFirstNameTextChanged = (e) =>
  {
    setFirstName(e.target.value);
  };
  const onHandleLastNameTextChanged = (e) =>
  {
    setLastName(e.target.value);
  };
  const onHandleEmailTextChanged = (e) =>
  {
    setEmail(e.target.value);
  };
  const onHandlePhoneTextChanged = (e) =>
  {
    setPhone(e.target.value);
  };
  const onHandleAddressTextChanged = (e) =>
  {
    setAddress(e.target.value);
  };

  const handleSaveStudent = (e) =>
  {
    e.preventDefault();
    const student = 
    {
      firstName,
      lastName,
      email,
      phone,
      address
    };
    console.log(student);
    saveStudent(student);
  };

  const saveStudent = async(student) =>
  {
    const url = `${process.env.REACT_APP_BASEURL}/students`;
    const response = await fetch(url, 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
      });
      console.log(response);
    if (response.status >= 200 && response.status <= 299) 
    {
      console.log("Student is saved");
    }     
  };
  return (
    <>
      <h1 className='page-title'>Add Student</h1>
      <section className='form-container'>
        <h4>Student Info</h4>
        <section className='form-wrapper'>
          <form className='form' onSubmit={handleSaveStudent}>
            <div className='form-control'>
              <label htmlFor='firstName'>First Name</label>
              <input
                onChange={onHandleFirstNameTextChanged}
                value={firstName}
                type='text'
                id='firstName'
                name='firstName'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                onChange={onHandleLastNameTextChanged}
                value={lastName}
                type='text'
                id='lastName'
                name='lastName'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={onHandleEmailTextChanged}
                value={email}
                type='text'
                id='email'
                name='email'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='phone'>Phone</label>
              <input
                onChange={onHandlePhoneTextChanged}
                value={phone}
                type='text'
                id='phone'
                name='phone'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <input
                onChange={onHandleAddressTextChanged}
                value={address}
                type='text'
                id='address'
                name='adress'
              />
            </div>
            <div className='buttons'>
              <button type='submit' className='btn'>
                Save
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
export default AddStudent;