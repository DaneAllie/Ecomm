import FireBaseAuthHookProvider from "./firebase/FirebaseAuthHook";
import FirebaseDataHookProvider from "./firebase/FirebaseDataHook";
import Routing from "./routes/Routing";

function App() {
	return (
		<div className='App'>
			<FirebaseDataHookProvider>
				<FireBaseAuthHookProvider>
					<Routing />
				</FireBaseAuthHookProvider>
			</FirebaseDataHookProvider>
		</div>
	);
}

export default App;
