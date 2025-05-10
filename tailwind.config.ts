
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                omni: {
                    primary: '#C41E3A',  // Rose red
                    secondary: '#8B0000', // Dark red
                    accent: '#FFE4E1',    // Misty rose
                    light: '#FFF0F5',     // Lavender blush
                    dark: '#1A0000',      // Very dark red/black
                    bubbleUser: '#FFF0F5',
                    bubbleAI: '#F8F8FF'
                },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'slide-in': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateX(20px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'pulse-ring': {
                    '0%': { 
                        transform: 'scale(0.8)',
                        opacity: '0.8'
                    },
                    '100%': { 
                        transform: 'scale(1.3)',
                        opacity: '0'
                    }
                },
                'bounce-soft': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10%)'
                    }
                },
                'thinking': {
                    '0%, 100%': {
                        transform: 'scale(0.8)', 
                        opacity: '0.5'
                    },
                    '50%': {
                        transform: 'scale(1.2)', 
                        opacity: '1'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-5px)'
                    }
                },
                'wave': {
                    '0%': { transform: 'scaleY(0.6)' },
                    '50%': { transform: 'scaleY(1)' },
                    '100%': { transform: 'scaleY(0.6)' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-500px 0' },
                    '100%': { backgroundPosition: '500px 0' }
                },
                'glow': {
                    '0%, 100%': { 
                        textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)' 
                    },
                    '50%': { 
                        textShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 25px rgba(255, 255, 255, 0.7)' 
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.3s ease-out',
                'slide-in': 'slide-in 0.4s ease-out',
                'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite',
                'bounce-soft': 'bounce-soft 1.5s infinite',
                'thinking': 'thinking 1.5s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'wave-1': 'wave 1.2s linear infinite',
                'wave-2': 'wave 1.2s linear infinite 0.15s',
                'wave-3': 'wave 1.2s linear infinite 0.3s',
                'wave-4': 'wave 1.2s linear infinite 0.45s',
                'wave-5': 'wave 1.2s linear infinite 0.6s',
                'shimmer': 'shimmer 2s linear infinite',
                'glow': 'glow 2s ease-in-out infinite'
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'roses-dark': "url('/rose-background-dark.png')",
                'roses-light': "url('/rose-background-light.png')",
                'main-background': "url('/lovable-uploads/8e2cd594-2f0e-478d-b846-e72c4c23cf52.png')",
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
