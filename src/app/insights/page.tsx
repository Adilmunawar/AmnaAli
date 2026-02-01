
import { Insights } from '@/components/Insights';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const InsightsPage = () => {
    return (
        <>
            <Navigation />
            <main className="flex-grow pt-20">
                <Insights />
            </main>
            <Footer />
        </>
    )
}

export default InsightsPage;
