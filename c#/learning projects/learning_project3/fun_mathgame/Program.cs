using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fun_mathgame
{
    class Program
    {
        public static void Main(string[] args) // this is a method called "Main". It is called when the program starts.

        {

            int num01 = 16;

            int num02 = 4;
            Console.WriteLine("What is " + num01 + " times " + num02 + "?");
            int answer = Convert.ToInt32(Console.ReadLine());
            if (answer == num01 * num02)
            {

                Console.WriteLine("Well done! Your answer is correct.");

            }
            else
            {

                Console.WriteLine("Are you even trying?");

            }
            Console.ReadKey();

        }
    }
}
