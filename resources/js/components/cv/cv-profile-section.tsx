import { UserRound } from 'lucide-react';
import CvSection from '@/components/cv/cv-section';

type CvProfileSectionProps = {
    intro: string;
};

export default function CvProfileSection({ intro }: CvProfileSectionProps) {
    return (
        <CvSection title="Profil" icon={<UserRound className="h-5 w-5" />}>
            <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="rounded-2xl border border-border/70 bg-background/70 p-5 text-base leading-8 text-muted-foreground">
                    {intro}
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-sky-500/10 p-5 text-sm leading-7 text-muted-foreground">
                    Här kan du lägga något som gör sidan mer personlig, till exempel vad du gillar att bygga, vad som driver dig eller vilken typ av team du vill arbeta i.
                </div>
            </div>
        </CvSection>
    );
}