import '../styles/global.css'

const props = {
  className: 'no-device',
}

const NoDevice = () => {
  return (
    <div className={props.className}>
      <h1 className="text-4xl font-bold mb-4">No Device Detected</h1>
      <p className="text-lg text-gray-600">Please connect a device to continue.</p>
    </div>
  );
}

export default NoDevice;
