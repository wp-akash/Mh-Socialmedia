'use client';
import React from 'react';

// Define the module type
interface Module {
  name: string;
  type: 'red' | 'white';
  icon: string;
}

// Define the available icon names
type IconName = 'calculator' | 'warehouse' | 'users' | 'file-text' | 'handshake' | 'trending-up' | 'link' | 'truck' | 'shopping-cart' | 'factory' | 'package';

const Erp_Modul = () => {
  const modules: Module[] = [
    // Row 1
    { name: 'POS', type: 'red', icon: 'calculator' },
    { name: 'Inventory', type: 'white', icon: 'warehouse' },
    { name: 'HRM', type: 'red', icon: 'users' },
    { name: 'Accounting', type: 'white', icon: 'file-text' },
    { name: 'CRM', type: 'red', icon: 'handshake' },
    { name: 'Sales', type: 'white', icon: 'trending-up' },
    // Row 2
    { name: 'Supply Chain', type: 'white', icon: 'link' },
    { name: 'Distribution', type: 'red', icon: 'truck' },
    { name: 'Purchase', type: 'white', icon: 'shopping-cart' },
    { name: 'Manufacturing', type: 'red', icon: 'factory' },
    { name: 'Warehouse', type: 'white', icon: 'package' },
    { name: 'Reporting', type: 'red', icon: 'file-text' }
  ];

  const getIcon = (iconName: IconName): React.ReactNode => {
    const iconProps = "w-8 h-8";
    const icons: Record<IconName, React.ReactNode> = {
      calculator: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V7H19V19ZM6.5 9.5H9.5V12H6.5V9.5ZM6.5 13H9.5V15.5H6.5V13ZM10.5 9.5H13.5V12H10.5V9.5ZM10.5 13H13.5V15.5H10.5V13ZM14.5 9.5H17.5V12H14.5V9.5ZM14.5 13H17.5V15.5H14.5V13Z"/>
        </svg>
      ),
      warehouse: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M12 3L2 9V11H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V11H22V9L12 3ZM18 20H6V11H8V13H10V11H14V13H16V11H18V20ZM12 5.7L17.6 9H6.4L12 5.7Z"/>
        </svg>
      ),
      users: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 13C18.7 13 22 14.3 22 17V20H10V17C10 14.3 13.3 13 16 13ZM8 12C10.2 12 12 10.2 12 8C12 5.8 10.2 4 8 4C5.8 4 4 5.8 4 8C4 10.2 5.8 12 8 12ZM8 13C5.3 13 2 14.3 2 17V20H9V17C9 15.4 9.4 14.1 10.1 13.2C9.4 13.1 8.7 13 8 13Z"/>
        </svg>
      ),
      'file-text': (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 12H16V14H8V12ZM8 16H13V18H8V16Z"/>
        </svg>
      ),
      handshake: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M21.71 8.71C22.1 8.32 22.1 7.68 21.71 7.29L16.71 2.29C16.32 1.9 15.68 1.9 15.29 2.29L13.3 4.28L2.29 15.29C1.9 15.68 1.9 16.32 2.29 16.71L7.29 21.71C7.68 22.1 8.32 22.1 8.71 21.71L19.72 10.7L21.71 8.71ZM16 4.41L19.59 8L18.17 9.41L14.59 5.83L16 4.41ZM8 19.59L4.41 16L13.17 7.24L16.76 10.83L8 19.59Z"/>
        </svg>
      ),
      'trending-up': (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
        </svg>
      ),
      link: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12S4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12S18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12S19.76 7 17 7Z"/>
        </svg>
      ),
      truck: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.7 4.3 20 6 20S9 18.7 9 17H15C15 18.7 16.3 20 18 20S21 18.7 21 17H23V12L20 8ZM6 18.5C5.2 18.5 4.5 17.8 4.5 17S5.2 15.5 6 15.5 7.5 16.2 7.5 17 6.8 18.5 6 18.5ZM19 10L21.5 12H17V10H19ZM18 18.5C17.2 18.5 16.5 17.8 16.5 17S17.2 15.5 18 15.5 19.5 16.2 19.5 17 18.8 18.5 18 18.5Z"/>
        </svg>
      ),
      'shopping-cart': (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M12 2L13.09 8.26L22 9L17.5 13.5L18.18 22L12 19L5.82 22L6.5 13.5L2 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      factory: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M22 21H2V19H4V16L6 17L10 15L14 16L18 15L20 16V19H22V21ZM20 14L18 13L14 14L10 13L6 14L4 13V8L6 9L10 7L14 8L18 7L20 8V14ZM4 6V4L6 5L10 3L14 4L18 3L20 4V6L18 5L14 6L10 5L6 6L4 6Z"/>
        </svg>
      ),
      package: (
        <svg viewBox="0 0 24 24" fill="currentColor" className={iconProps}>
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12"/>
        </svg>
      )
    };
    return icons[iconName] || icons['file-text'];
  };

  const handleModuleClick = (moduleName: string): void => {
    console.log(`Selected module: ${moduleName}`);
    // Add your navigation logic here
    // Example: router.push(`/modules/${moduleName.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <>
      <main className="bg-gray-50 py-20 md:py-20">
        <div className="global-container md:px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="h3">
              Modules Lifestyle Erp
            </h3>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-0 gap-3 rounded-lg overflow-hidden shadow-lg">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`h-36 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 hover:shadow-xl md:h-50 sm:h-50 ${
                  module.type === 'red' 
                    ? 'text-white' 
                    : 'bg-white text-gray-800'
                }`}
                style={{
                  backgroundColor: module.type === 'red' ? '#d82d45' : undefined
                }}
                onClick={() => handleModuleClick(module.name)}
              >
                <div className="mb-3">
                  {getIcon(module.icon as IconName)}
                </div>
                <p className="!text-[18px]">
                  {module.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Erp_Modul;