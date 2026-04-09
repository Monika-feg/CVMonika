
import CvEducationSection from '@/components/cv/cv-education-section';
import CvExperienceSection from '@/components/cv/cv-experience-section';
import CvHeader from '@/components/cv/cv-header';
import CvRepositoriesSection from '@/components/cv/cv-repositories-section';
import CvSidebar from '@/components/cv/cv-sidebar';
import type { CvData } from '@/components/cv/types';

type WelcomeProps = {
    cvData: CvData;
};

export default function Welcome({ cvData }: WelcomeProps) {
    return (
        <main className="relative overflow-hidden bg-background text-foreground">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl dark:bg-fuchsia-500/10" />
                <div className="absolute right-[-6rem] top-[30rem] h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-500/10" />
                <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />
            </div>

            <div className="relative">
                <CvHeader hero={cvData.hero} profile={cvData.profile} />

                <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,2fr)_320px] lg:items-start">
                        <div className="space-y-12">
                            <CvEducationSection education={cvData.education} />
                            <CvExperienceSection experience={cvData.experience} />
                            <CvRepositoriesSection repositories={cvData.repositories} />
                        </div>

                        <CvSidebar
                            links={cvData.links}
                            skills={cvData.skills}
                            strengths={cvData.strengths}
                            languages={cvData.languages}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
