import React from 'react';
import Link from 'next/link';

const ServicesComp: React.FC = () => {
  const services = [
    { name: 'Shorten it', desc: 'abc', href: '#' },
    { name: 'Zip It', desc: 'abc', href: '#' },
    { name: 'Mend It', desc: 'abc', href: '#' },
    { name: 'Remodel It', desc: 'abc', href: '#' },
    { name: 'Resize It', desc: 'abc', href: '#' },
    { name: 'Lengthen It', desc: 'abc', href: '#' },
    { name: 'Hem It', desc: 'abc', href: '#' },
    { name: 'Dressmaking', desc: 'abc', href: '#' },
    { name: 'Wedding', desc: 'abc', href: '#' },
    { name: 'Bridal Party', desc: 'abc', href: '#' },
    { name: 'Costumes', desc: 'abc', href: '#' },
    { name: 'Repair', desc: 'abc', href: '#' },
    { name: 'Remodel', desc: 'abc', href: '#' },
    { name: 'Corporate', desc: 'abc', href: '#' },
    { name: 'Label', desc: 'abc', href: '#' },
    { name: 'Suit Alterations', desc: 'abc', href: '#' },
    { name: 'Jacket Alterations', desc: 'abc', href: '#' },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex-1 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ServicesComp;
