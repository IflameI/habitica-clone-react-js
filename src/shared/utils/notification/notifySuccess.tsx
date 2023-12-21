import { toast } from 'react-toastify';

const notifySuccess = (thing: string, count: number, icon: any) =>
  toast.success(
    <div>
      Вы получили немного {thing}
      <span className='toastIcon'>{icon}</span>
      {count}
    </div>,
  );

export default notifySuccess;
