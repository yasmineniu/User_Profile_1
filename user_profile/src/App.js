import { useState } from 'react';
import './App.css';
import EditableUserProfile from './components/EditableUserProfile';
import UserProfile from './components/UserProfile';



function App() {
   
    
    
    const [editMode, setEditMode] = useState(false);

    
    // first 5 variables
    const [accountnumber, setAccountnumber] = useState("123-456-789");
    const [email, setEmail] = useState("xxxxx@gmail.com");
    const [username, setUsername] = useState("user72772727");
    const [firstname, setFirstname] = useState("Random first name");
    const [lastname, setLastname] = useState("Random second name");
    // last 5 fields
    const [nric, setNric] = useState("g67289hsmn")
    const [phonenumber, setPhonenumber] = useState("999992282")
    const [password, setPassword] = useState("*********")
    // const [month, setMonth] = useState("July");
    // const [day, setDay] = useState("07");
    // const [year, setYear] = useState("2000");
    const [dob, setDob] = useState("2000-01-01") // try to replace y/m/d
    const [address, setAddress] = useState("bcjkhc hushckuha kuhukhd")


    const stored = {accountnumber, email, username, firstname, lastname, nric, dob, phonenumber, password, address };

    function handleEditComplete(result) {
        console.log("handleEditComplete", result);
        if (result != null) {
            setAccountnumber(result.accountnumber);
            setEmail(result.email);
            setUsername(result.username);
            setFirstname(result.firstname);
            setLastname(result.lastname)
            setNric(result.nric)
            setPhonenumber(result.phonenumber)
            setPassword(result.password)
            setDob(result.dob)
            setAddress(result.address)
            
        }        
        setEditMode(false);
    }

    return (
        <div className="flex-container">
            <div className='App2'>
             <img src={require("./profile.png")} alt="Avatar"></img>
             <h1 className="username">user72772727</h1>
             <div>
            <button class="edit"  >Edit</button>
{/* //need to add the onclick function for edit */}
        </div>
            </div>
            <div className="App">  
            <div class="header"><h1> Personal Information</h1>
                
            </div>               
                {
                    editMode
                        ? <>
                            
                            <EditableUserProfile
                                    stored={stored}
                                    editCompleteCallback={handleEditComplete}                            
                            />
                        </>
                        : <>
                            
                                 
                            
                            <UserProfile
                                    stored={stored}
                                    startEditCallback={() => setEditMode(true)}
                            />
                        </>
                }            
            </div>
        </div>
    );
}

export default App;




// import { useState } from 'react';
// import './App.css';
// import EditableUserProfile from './components/EditableUserProfile';
// import UserProfile from './components/UserProfile';
// //import User_info from '../User_info.json'


// function App() {
   
//     // const [items, setItems] = useState(User_info.items)// item is the orginal userinfo
//     const [editMode, setEditMode] = useState(false);
 
//     // first 5 variables
//     const [accountnumber, setAccountnumber] = useState("123-456-789");
//     const [email, setEmail] = useState("xxxxx@gmail.com");
//     const [username, setUsername] = useState("user72772727");
//     const [firstname, setFirstname] = useState("Random first name");
//     const [lastname, setLastname] = useState("Random second name");
//     // last 5 fields
//     const [nric, setNric] = useState("g67289hsmn")
//     const [phonenumber, setPhonenumber] = useState("999992282")
//     const [password, setPassword] = useState("*********")
//     // const [month, setMonth] = useState("July");
//     // const [day, setDay] = useState("07");
//     // const [year, setYear] = useState("2000");
//     const [dob, setDob] = useState("2000-01-01") // try to replace y/m/d
//     const [address, setAddress] = useState("bcjkhc hushckuha kuhukhd")


//     const stored = {accountnumber, email, username, firstname, lastname, nric, dob, phonenumber, password, address };

//     function handleEditComplete(result) {
//         console.log("handleEditComplete", result);
//         if (result != null) {
//             setAccountnumber(result.accountnumber);
//             setEmail(result.email);
//             setUsername(result.username);
//             setFirstname(result.firstname);
//             setLastname(result.lastname)
//             setNric(result.nric)
//             setPhonenumber(result.phonenumber)
//             setPassword(result.password)
//             setDob(result.dob)
//             setAddress(result.address)
            
//         }
//         // updating the json file based on the account number
//         // setItems(
//         //     items.map(item=>{
//         //         if(item.accountnumber === result.accountnumber){
//         //             return{
//         //                 ...item, email:result.email,firstname:result.firstname
//         //             }
//         //         }
//         //         else{
//         //             return item;
//         //         }
//         //     })
//         // )
//         //

//         setEditMode(false);
//     }

//     return (
//         <div className="container">
//             <div className="App">                 
//                 {
//                     editMode
//                         ? <>
//                             <h1>My Profile</h1>
//                             <EditableUserProfile
//                                     stored={stored}
//                                     editCompleteCallback={handleEditComplete}                            
//                             />
//                         </>
//                         : <>
                            
//                                  <h1>My Profile</h1>
                            
//                             <UserProfile
//                                     stored={stored}
//                                     startEditCallback={() => setEditMode(true)}
//                             />
//                         </>
//                 }            
//             </div>
//         </div>
//     );
// }

// export default App;

