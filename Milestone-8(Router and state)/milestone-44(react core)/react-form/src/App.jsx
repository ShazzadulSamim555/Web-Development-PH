
import './App.css'
import ControlledField from './component/ControlledField';
import Family from './component/familyTree.jsx/Family';
import FormAction from './component/FormAction';
import HookForm from './component/hook/HookForm';
import ProductManagement from './component/product/ProductManagement';
import SimpleForm from './component/SimpleForm';

function App() {
  

  return (
    <>
      <div>
        <h2>Fill-up your form</h2>

        {/* <SimpleForm></SimpleForm> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField ></ControlledField> */}
        {/* <HookForm></HookForm> */}
        {/* <ProductManagement></ProductManagement> */}
        <Family></Family>
      </div>
    </>
  )
}

export default App
