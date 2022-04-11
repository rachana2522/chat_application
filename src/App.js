import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';
const projectID = '0125f0b0-8dc2-409a-92b8-e65488cc3e58';


const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="0125f0b0-8dc2-409a-92b8-e65488cc3e58"
      userName="javascriptlucky"
      userSecret="2FYe*Gs@9.@6KWK"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}


export default App;
