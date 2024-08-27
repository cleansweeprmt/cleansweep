const PageHeader = ({title}) => {
    return ( 
        <section className="container-fluid relative header-bg flex items-center justify-center min-h-[220px] bg-cover bg-center">
            <div className="h-full w-full bg-black opacity-80 absolute left-0 top-0 flex items-center"></div>
            <h2 className="font-bold text-lg lg:text-4xl text-secondary z-10 text-center mt-32">{title}</h2>
            
        </section>
     );
}
 
export default PageHeader;