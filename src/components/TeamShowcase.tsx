import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';
import { cn } from '../lib/utils';
import Reveal from './Reveal';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification?: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

import { teamMembersContent } from '../data/content';
import { teamMembersImages } from '../assets/images';

const DEFAULT_MEMBERS: TeamMember[] = teamMembersContent.map((member, i) => {
  const imgKey = `image-${i + 1}` as keyof typeof teamMembersImages;
  return {
    ...member,
    image: teamMembersImages[imgKey] || teamMembersImages["image-1"]
  };
});

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  let col1: TeamMember[] = [];
  let col2: TeamMember[] = [];
  let col3: TeamMember[] = [];

  if (members.length === 5) {
    // Symmetrical 2-1-2 layout for 5 members
    col1 = [members[0], members[3]];
    col2 = [members[1]];
    col3 = [members[2], members[4]];
  } else if (members.length === 4) {
    // 2-1-1 layout for 4 members
    col1 = [members[0], members[3]];
    col2 = [members[1]];
    col3 = [members[2]];
  } else {
    // Default round robin
    col1 = members.filter((_, i) => i % 3 === 0);
    col2 = members.filter((_, i) => i % 3 === 1);
    col3 = members.filter((_, i) => i % 3 === 2);
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-body">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 self-center md:self-start overflow-x-auto pb-1 md:pb-0 hide-scrollbar max-w-full">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[95px] h-[105px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[36px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[106px] h-[116px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className={cn("flex flex-col gap-2 md:gap-3", members.length !== 5 && "mt-[16px] sm:mt-[26px] md:mt-[32px]")}>
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[100px] h-[110px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list*/}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full justify-center">
        {members.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.05}>
            <MemberRow
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-300',
        className,
        isDimmed ? 'opacity-30' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.7)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-30' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social*/}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-white w-5' : 'bg-white/20',
          )}
        />
        <span
          className={cn(
            'text-[18px] md:text-[20px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-white' : 'text-gray-300',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={12} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={12} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={12} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={12} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role and Qualification */}
      <div className="mt-1.5 pl-[27px] flex flex-col gap-1">
        <p className="text-[9px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#00AEEF]">
          {member.role}
        </p>
        {member.qualification && (
          <p className="text-[11px] md:text-xs font-mono text-gray-400">
            {member.qualification}
          </p>
        )}
      </div>
    </div>
  );
}
