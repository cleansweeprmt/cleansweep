const PageHeader = ({title,subTitle}) => {
    return ( 
        <section className="container-fluid relative header-bg flex flex-col items-center justify-center min-h-[220px] bg-cover bg-center">
            <div className="h-full w-full bg-black opacity-80 absolute left-0 top-0 flex items-center"></div>
            <h2 className="font-bold text-lg lg:text-4xl text-secondary z-10 text-center mt-32 mb-6">{title}</h2>
            {subTitle && <p className="text-gray-300 text-lg z-10 text-white  text-center max-w-3xl mx-auto mb-12">{subTitle}</p>}
            
        </section>
     );
}
 
export default PageHeader;