import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Lana',
            image: 'https://www.slate.fr/sites/default/files/styles/1200x680/public/lanadelrey.jpg',
            message: 'whats up'
        },
        {
            name: 'lana',
            image: 'https://www.slate.fr/sites/default/files/styles/1200x680/public/lanadelrey.jpg',
            message: 'let\'s meet'
        },
        {
            name: 'lana',
            image: 'https://www.slate.fr/sites/default/files/styles/1200x680/public/lanadelrey.jpg',
            message: 'do you think i am beautifull?'
        }, {
            message: 'good',
        }

    ])

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>YOU MATCHED WITH LANA YESTERDAY</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar
                            className='chatScreen__avatar'
                            src={message.image}
                            alt={message.name}
                        />
                        <p className='chatScreen__text'>
                            {message.message}
                        </p>
                    </div>
                ) : (
                        <div className='chatScreen__message'>
                            <p className='chatScreen__textUser'>
                                {message.message}
                            </p>
                        </div>
                    )
            ))}

            <form
                className='chatScreen__input'
                action="">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    placeholder='type a message...'
                    type="text" />
                <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
            </form>



        </div>
    )
}

export default ChatScreen
