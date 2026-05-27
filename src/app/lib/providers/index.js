
import InstallcontextProvider from '@/context/installcontext';

const Provider = ({ children }) => {
    return (
        <>
            <InstallcontextProvider>
                {children}
            </InstallcontextProvider>
        </>
    );
};

export default Provider;