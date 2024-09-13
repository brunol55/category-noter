import { Dispatch, Fragment, SetStateAction } from 'react'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild
} from '@headlessui/react'
import Tabs from '../Tabs'

const Sidebar = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='flex h-full max-w-full'>
            <TransitionChild
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <DialogPanel className='w-full max-w-xs bg-white px-4 py-6 shadow-xl'>
                <Tabs setOpen={setOpen} />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Sidebar
