import { toast } from 'react-toastify';

const notifyError = (thing: string, count: number, icon: any) =>
  toast.error(
    <div>
      You lost a little {thing}
      <span className='toastIcon'>{icon}</span>
      {count}
    </div>,
  );

export default notifyError;
