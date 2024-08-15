
import { getLocalizedPathname } from "@i18n/utils";
import { languages } from "@i18n/ui";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitch({ currentUrl }: { currentUrl: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="cursor-pointer p-2 transition ease-in-out duration-200 flex justify-center rounded-lg hover:bg-slate-700 hover:shadow-lg">
                    <span className="sr-only">Switch language</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.entries(languages).map(([lang, label]) => (
                    <DropdownMenuItem key={lang}>
                        <a
                            href={getLocalizedPathname(currentUrl, lang)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        >
                            {label}
                        </a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
