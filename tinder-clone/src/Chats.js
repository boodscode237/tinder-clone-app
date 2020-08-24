import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name='Lana'
                message='hi'
                timestamp='45 min ago'
                profilePic='https://www.slate.fr/sites/default/files/styles/1200x680/public/lanadelrey.jpg'
            />
            <Chat
                name='Sveta'
                message='hi'
                timestamp='45 min ago'
                profilePic='https://24smi.org/public/media/celebrity/2017/10/19/FdU7BuOPPrHs_sveta-bilialova.jpg'
            />
            <Chat
                name='Tanya'
                message='hello'
                timestamp='45 min ago'
                profilePic='https://pbs.twimg.com/profile_images/1196902504912629761/0Mop5O9s_400x400.jpg'
            />
            <Chat
                name='Sonya'
                message='salut'
                timestamp='45 min ago'
                profilePic='https://radiotrek.rv.ua/media/gallery/full/s/o/sonya_kay.jpeg'
            />

        </div>
    )
}

export default Chats
