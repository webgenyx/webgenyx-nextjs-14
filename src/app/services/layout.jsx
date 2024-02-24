import SeviceNav from "../connectedComponents/serviceNav/SeviceNav";


export default function ServiceLayout({ children }) {
    return (
        <>
          <SeviceNav/>
          {children}
        </>
    );
  }