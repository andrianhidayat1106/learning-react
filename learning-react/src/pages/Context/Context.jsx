import { createContext, useContext } from "react"

export const ProfileContext = createContext()

export default function Context(){
    return <>
       <ProfileContext.Provider value={"Sidoarjo"}>

          <ProfileAddress></ProfileAddress>
          <Profile></Profile>
       </ProfileContext.Provider>
    </>
}

function ProfileAddress(){
    const profile = useContext(ProfileContext)

    return <>
        <p>Alamat : {profile}</p>
    </>

}

function Profile(){
    const profile = useContext(ProfileContext)

    return <>
        <p>Profile : {profile}</p>
    </>

}