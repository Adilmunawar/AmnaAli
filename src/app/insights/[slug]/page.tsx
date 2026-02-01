
import articles from '@/lib/articles.json';
import placeholderImages from '@/lib/placeholder-images.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BrainCircuit, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }));
}

const ArticlePage = ({ params }: { params: { slug: string } }) => {
    const article = articles.find((p) => p.id === params.slug);

    if (!article) {
        notFound();
    }

    const image = placeholderImages.find(p => p.id === article.imageId);

    return (
        <main className="flex-grow pt-20 pb-16">
            <article className="max-w-4xl mx-auto px-6 lg:px-8">
                <header className="mb-12 text-center">
                     <p className="text-base font-semibold leading-7 text-accent flex items-center justify-center gap-2">
                        <BrainCircuit className="w-5 h-5"/>
                        {article.category}
                    </p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {article.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        {article.excerpt}
                    </p>
                    <div className="mt-6 flex justify-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Amna Ali</span>
                        </div>
                         <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>May 28, 2024</span>
                        </div>
                    </div>
                </header>

                <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
                    {image && (
                        <Image
                            src={image.src}
                            alt={article.title}
                            fill
                            className="object-cover"
                            data-ai-hint={image.hint}
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>

                <div className="prose prose-invert prose-lg max-w-none mx-auto
                    prose-headings:text-white prose-p:text-slate-300 prose-a:text-accent
                    prose-strong:text-white prose-blockquote:border-accent prose-blockquote:text-slate-400">
                    
                    <p>
                        In today's competitive talent market, simply posting a job description and waiting for applications is a recipe for mediocrity. Top candidates are passive, discerning, and inundated with offers. To capture their attention, your recruitment strategy must evolve. It needs to adopt the principles of modern marketing and design, transforming a simple job post into a compelling brand statement.
                    </p>
                    <p>
                       This is where the fusion of Human Resources and design thinking becomes critical. A well-designed job advertisement does more than list requirements; it tells a story, conveys company culture, and sells a vision. Let's explore why your current job posts might be failing and how a design-centric approach can become your most powerful recruitment tool.
                    </p>
                    
                    <h2>The Problem with "Just a Job Post"</h2>
                    <p>
                        Most job descriptions are boring, text-heavy documents that focus entirely on the employer's needs. They fail to answer the most important question in a candidate's mind: "What's in it for me?" This oversight leads to a cascade of negative outcomes:
                    </p>
                    <ul>
                        <li><strong>Low Engagement:</strong> Passive candidates scroll right past uninspired blocks of text.</li>
                        <li><strong>Poor Brand Perception:</strong> A sloppy or generic job post signals a company that doesn't care about details or its people.</li>
                        <li><strong>Attracting the Wrong Fit:</strong> You attract candidates who are just looking for *any* job, not the right one.</li>
                    </ul>

                    <blockquote>
                        "Your job post is often the very first interaction a potential employee has with your brand. Make it count."
                    </blockquote>

                    <h2>Merging Design Principles with HR Strategy</h2>

                    <p>By applying fundamental design principles, you can transform your recruitment materials from a passive listing into an active magnet for talent.</p>

                    <h3>1. Visual Hierarchy & Readability</h3>
                    <p>Just as a good website guides a user's eye, a good job post should be scannable. Use headings, subheadings, bullet points, and bold text to break up information. Highlight the most compelling aspects of the role—like unique benefits, growth opportunities, or impactful projects—so they are seen first.</p>

                    <h3>2. Branding & Consistency</h3>
                    <p>Does your job post *look* like your company? Use your brand's fonts, colors, and tone of voice. This reinforces your employer brand and creates a cohesive experience for candidates, from the first ad they see to the final offer letter.</p>

                    <h3>3. Storytelling Through Imagery and Video</h3>
                    <p>A picture is worth a thousand words, and in recruitment, it could be worth a thousand applications. Include high-quality photos of your team and office. Better yet, embed a short video where team members talk about the company culture. This builds an immediate emotional connection that text alone cannot achieve.</p>
                    
                    <div className="mt-12 text-center">
                        <Link href="/insights" className="text-accent font-semibold hover:underline">
                            &larr; Back to all insights
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default ArticlePage;
