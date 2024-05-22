const PageHeader = ({title}) => {
    return ( 
        <section className="container-fluid relative header-bg flex items-center justify-center min-h-[350px] bg-cover bg-center">
<div className="h-full w-full bg-black opacity-80 absolute left-0 top-0"></div>
             <h2 className="font-bold text-lg lg:text-2xl text-primary z-10 text-center">{title}</h2>

        </section>
     );
}
 
export default PageHeader;