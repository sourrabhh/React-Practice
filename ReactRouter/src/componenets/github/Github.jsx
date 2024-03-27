import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const github = useLoaderData()
    // const [data, setData] = useState("");

    // useEffect(
    //     () => {
    //         fetch('https://api.github.com/users/sourrabhh')
    //         .then(res => res.json())
    //         .then(data => { setData(data) } )
    //     },
    //     []
    // )

  return (
    <div className='text-center text-white text-3xl m-4 bg-gray-600'>
        Github Followers :: {github.followers}
    </div>
  )
}

export default Github

export const GithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/sourrabhh')
    return response.json()           
}