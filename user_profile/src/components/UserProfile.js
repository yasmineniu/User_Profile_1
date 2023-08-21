
import Group from './Group';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

   

    return <div>
        <Group>
            <label>Account Number* </label> {stored.accountnumber}
        </Group>
        <Group>
            <label>Email</label> {stored.email}
        </Group>
        <Group>
            <label>Username*</label> {stored.username}
        </Group>
        <Group>
            <label>First Name </label> {stored.firstname}
        </Group>
        <Group>
            <label>Last Name </label> {stored.lastname}
        </Group>
        <Group>
            <label>Nric* </label> {stored.nric}
        </Group>
        <Group>
            <label>Contact phone</label> {stored.phonenumber}
        </Group>
        <Group>
            <label>Pwd</label> {stored.password}
        </Group>
        <Group>
            <label>Birth Date* </label> {stored.dob}
        </Group>
        <Group>
            <label>Address </label> {stored.address}
        </Group>
        <div>
            <button onClick={startEditCallback}>Edit</button>
        </div> 
    </div>
}