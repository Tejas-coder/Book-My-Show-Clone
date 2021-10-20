import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilter  = (props) => {
  return (
      <div className="bg-gray-100 my-2 p-2">
          <Disclosure>
        {({open}) => (
            <>
            <Disclosure.Button className="py-2 flex items-center gap-3">
                {open ? <BiChevronUp /> : <BiChevronDown />}
                <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <div className="flex items-center gap-3 flex-wrap">
                    {props.tags.map((tag) => (
                        <>
                        <div className="border-2 border-gray-400 p-1">
                            <span className="text-red-700">{tag}</span>
                        </div>
                        </>
                    ))}
                </div>
          </Disclosure.Panel>
          </>
        )}
    </Disclosure>
      </div>
  )
}

export default PlaysFilter;