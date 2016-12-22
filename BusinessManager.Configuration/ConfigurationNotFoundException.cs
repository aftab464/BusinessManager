using System;

namespace BusinessManager.Configuration
{
    /// <summary>
    /// Custom exception to handle configuration not found.
    /// </summary>
    public class ConfigurationNotFoundException : Exception
    {
        public ConfigurationNotFoundException()
        {
        }

        public ConfigurationNotFoundException(string message)
        : base(message)
        {
        }

        public ConfigurationNotFoundException(string message, Exception inner)
        : base(message, inner)
        {
        }
    }
}
