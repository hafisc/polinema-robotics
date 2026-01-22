import { teams } from '@/lib/data';
import DivisionDetail from '@/components/features/divisions/DivisionDetail';

export async function generateStaticParams() {
    // Generate params for all teams, except the ones that already have explicit folders if preferreable.
    // However, Next.js typically prioritizes explicit folders.
    // But to be safe and ensure export builds properly for all unhandled IDs:
    return teams.map((team) => ({
        id: team.id,
    }));
}

export default async function DivisionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <DivisionDetail teamId={id} />;
}
