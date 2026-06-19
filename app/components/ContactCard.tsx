import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';
import Image from 'next/image';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
	imageSrc?: string;
};

export function ContactCard({
	title,
	description,
	contactInfo,
	className,
	formSectionClassName,
	children,
	imageSrc,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-card border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-5',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-muted-foreground/50 z-20" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-muted-foreground/50 z-20" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-muted-foreground/50 z-20" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-muted-foreground/50 z-20" />
			
			<div className="flex flex-col justify-between lg:col-span-2 relative overflow-hidden bg-zinc-100 min-h-[400px]">
				{imageSrc && (
					<Image 
						src={imageSrc}
						alt="Contact support"
						fill
						className={cn("absolute inset-0 w-full h-full object-cover", (title || description || contactInfo?.length) ? "opacity-40 mix-blend-overlay" : "")}
					/>
				)}
				{(title || description || contactInfo?.length) && (
					<div className="relative z-10 h-full flex flex-col space-y-6 px-6 py-10 md:p-10 text-white">
						<div>
							{title && <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>}
							{description && <p className="text-zinc-300 mt-4 max-w-md text-sm md:text-base">{description}</p>}
						</div>
						
						<div className="flex-grow"></div>
						
						<div className="grid gap-6">
							{contactInfo?.map((info, index) => (
								<ContactInfo key={index} {...info} className="text-white" />
							))}
						</div>
					</div>
				)}
			</div>
			
			<div
				className={cn(
					'bg-background flex h-full w-full flex-col justify-center border-t p-6 md:col-span-1 lg:col-span-3 md:border-t-0 md:border-l relative z-10 md:p-12',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-start gap-4', className)} {...props}>
			<div className="bg-white/10 rounded-lg p-3 shrink-0">
				<Icon className="h-6 w-6 text-white" />
			</div>
			<div>
				<p className="font-semibold text-lg">{label}</p>
				<p className="text-zinc-300 text-sm mt-1">{value}</p>
			</div>
		</div>
	);
}
