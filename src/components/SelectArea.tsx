'use client';

import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

const options = [
  'Produtos de limpeza e higiene',
  'Máquinas de limpeza pesada',
  'Equipamentos',
];

export default function SelectArea({
  area,
  setArea,
}: {
  area: string;
  setArea: (value: string) => void;
}) {
  return (
    <div className="flex flex-col mb-4">
      <span className="mb-1 text-md font-medium text-[#263165]">
        Áreas de maior interesse no simpósio:
        <span className="text-red-500 ml-1">*</span>
      </span>
      <Listbox value={area} onChange={setArea}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-[#f5f7fa] py-2 pl-4 pr-10 text-left text-[#263165] border border-[#263165]/30 focus:outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat]">
            <span>{area || 'Selecione uma área'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon className="h-5 w-5 text-[#009FE3]" />
            </span>
          </Listbox.Button>

          {/* Transição animada */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white text-[#263165] border border-[#263165]/30 shadow-lg ring-1 ring-[#009FE3]/30 focus:outline-none z-10 font-[Montserrat]">
              {options.map((opt, idx) => (
                <Listbox.Option
                  key={idx}
                  value={opt}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 text-sm ${
                      active ? 'bg-[#009FE3]/10' : ''
                    }`
                  }
                >
                  {opt}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
