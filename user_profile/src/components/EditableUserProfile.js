import React,{ useState, useEffect } from 'react';
import Group from './Group';
import Button from 'react-bootstrap/Button';

export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    console.log("Edit User Profile");
    // first 5 variables

    const [accountnumber, setAccountnumber] = useState(stored.accountnumber);
    const [email, setEmail] = useState(stored.email);
    const [username, setUsername] = useState(stored.username);
    const [firstname, setFirstname] = useState(stored.firstname);
    const [lastname, setLastname] = useState(stored.lastname);
    // last 5 fields
    const [nric, setNric] = useState(stored.nric)
    const [phonenumber, setPhonenumber] = useState(stored.phonenumber)
    const [password, setPassword] = useState(stored.password)
    // const [month, setMonth] = useState(stored.month);
    // const [day, setDay] = useState(stored.day);
    // const [year, setYear] = useState(stored.year);
    const [dob, setDob] = useState(stored.dob) // try to replace y/m/d
    const [address, setAddress] = useState(stored.address)

 //   const maxDay = months.getMaxDays(month);

    function handleCancelClicked() {
        editCompleteCallback(null);
    }

    function handleSaveClicked() {
        console.log("Saved");
        editCompleteCallback({accountnumber,email, username, firstname ,lastname, nric, phonenumber, password, dob, address });
    }

    // useEffect(() => {
    //     setDay(bound(day, 1, maxDay));
    // }, [month]);




    return <>
        <Group>            
            <label>Account Number*  </label> {accountnumber}
            
            

        </Group>
        <Group>            
            <label>Email</label>            
            
            <input
            type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
            
            />
        </Group>
        <Group>            
            <label>Username* </label> {username}
            
        </Group>
        <Group>            
            <label>First Name*</label> {firstname}
            
        </Group>
        <Group>            
            <label>Last Name*</label>{lastname}
            
        </Group>
        <Group>            
            <label>NRIC* </label> {nric}
        </Group>
        <Group>            
            <label>Contact phone</label>
            <input
                type='text'
                value={phonenumber}
                onChange={e => setPhonenumber(e.target.value)}
            />
        </Group>
        <Group>            
            <label>Password</label>
            <input
                type='text'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </Group>
        <Group>            
            <label>Birth Date* {dob} </label>
        </Group>
        <Group>            
            <label>Address</label>
            <textarea
            rows="2" cols="0"
                type='text'
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            
        </Group>

        <div>
        <Button onClick={handleSaveClicked} variant="success">Save</Button>{' '}
        <Button onClick={handleCancelClicked} variant="secondary">Cancel</Button>{' '}

        </div>
    </>
}